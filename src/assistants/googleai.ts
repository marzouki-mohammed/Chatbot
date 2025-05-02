import { GoogleGenerativeAI } from "@google/generative-ai";

const googleAi = new GoogleGenerativeAI(import.meta.env.VITE_GOGGLE_AI_API_KEY);

class Assistans {
  private chat: any;

  constructor() {
    const gemini = googleAi.getGenerativeModel({ model: "gemini-2.0-flash" });
    this.chat = gemini.startChat({ history: [] });
  } 

  async sendMessage(message: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage(message);
      const resultcontent = result.response.text(); // très important pour lire le texte
      return resultcontent;
    } catch (error) {
      return "Not Found";
    }
  }
}

export default Assistans;
