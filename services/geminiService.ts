import { GoogleGenAI, Type, Schema } from "@google/genai";
import { BBH_SYSTEM_PROMPT } from "../constants";
import { GeneratedSoapResponse } from "../types";

// Define the schema for the output
const soapSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    hospital: { type: Type.STRING },
    patient_summary: { type: Type.STRING },
    soap_details: {
      type: Type.OBJECT,
      properties: {
        subjective: { type: Type.STRING, description: "Patient's history, symptoms, and complaints in their own words (translated)." },
        objective: { type: Type.STRING, description: "Vitals, exam findings, and physical data mentioned." },
        assessment: { type: Type.STRING, description: "Potential diagnosis based on symptoms." },
        plan: { type: Type.STRING, description: "Medications, tests, and follow-up instructions." },
      },
      required: ["subjective", "objective", "assessment", "plan"],
    },
    raw_transcript_reference: { type: Type.STRING },
  },
  required: ["hospital", "patient_summary", "soap_details", "raw_transcript_reference"],
};

export const generateSoapNote = async (transcript: string, selectedLanguage: string): Promise<GeneratedSoapResponse> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: `Here is the Raw Transcript (Language context: ${selectedLanguage}):\n\n${transcript}` }],
        },
      ],
      config: {
        systemInstruction: BBH_SYSTEM_PROMPT,
        responseMimeType: "application/json",
        responseSchema: soapSchema,
        temperature: 0.1, // Low temperature for clinical accuracy
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from Gemini.");
    }

    const data = JSON.parse(text) as GeneratedSoapResponse;
    return data;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};