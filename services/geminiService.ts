
import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const languageMap: Record<Language, string> = {
  pt: 'Português de Angola',
  en: 'English',
  fr: 'French',
  es: 'Spanish'
};

export async function generateItinerary(params: {
  province: string;
  dates: string;
  budget: string;
  people: number;
  type: string;
  language: Language;
}) {
  const langName = languageMap[params.language];
  const prompt = `
    Create a detailed travel itinerary for ${params.province} province, Angola.
    Duration: ${params.dates}
    Budget: ${params.budget}
    People: ${params.people}
    Travel style: ${params.type}

    Provide a day-by-day plan with suggestions for:
    1. Places to visit (e.g., Tundavala, Leba, Praia do Soba, etc.)
    2. Recommended restaurants
    3. Specific activities for the ${params.type} style
    4. Safety and local transport tips.

    Respond in ${langName}, with an enthusiastic and professional tone.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return "Error generating itinerary. Please try again.";
  }
}
