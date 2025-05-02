import OpenAI from "openai";

// Initialiser OpenAI avec la clé API
const openAi = new OpenAI({
  apiKey: import.meta.env.VITE_DEEPSEEK_AI_API_KEY,  // Remplacez par votre clé API
  dangerouslyAllowBrowser: true,  // Si vous utilisez le SDK côté client
});

class Assistantdeepseek {
  private model: string;

  constructor() {
    this.model = "gpt-4-mimi"; // Choisir le modèle GPT-4.1
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response = await openAi.chat.completions.create({
        model: this.model,
        messages: [{ role: "user", content: message }],
      });

      // Extraire la réponse du modèle
      const resultContent = response.choices[0]?.message?.content || "Pas de réponse";
      return resultContent;
    } catch (error) {
      console.error("Erreur OpenAI API:", error);
      return "Erreur de communication avec l'API.";
    }
  }
}

export default Assistantdeepseek;
