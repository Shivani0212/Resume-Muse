
import {genkit as realGenkit, type GenkitPlugin, type Genkit as GenkitType} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

let ai: GenkitType;

// Check if GOOGLE_API_KEY is present and not an empty string
if (process.env.GOOGLE_API_KEY && process.env.GOOGLE_API_KEY.trim() !== "") {
  console.log('[Genkit Init] GOOGLE_API_KEY found. Initializing Genkit with Google AI plugin.');
  const plugins: GenkitPlugin[] = [googleAI()];
  const defaultModel = 'googleai/gemini-2.0-flash'; // Your preferred model
  ai = realGenkit({
    plugins: plugins,
    model: defaultModel,
  });
  console.log('[Genkit Init] Genkit initialized successfully with Google AI plugin.');
} else {
  console.warn(
    '[Genkit Init] GOOGLE_API_KEY is not set or is empty. AI features are disabled. A stub Genkit object is provided.'
  );
  // Provide a stub Genkit object that logs warnings/errors if its methods are called.
  // This prevents the application from crashing if Genkit methods are unexpectedly called
  // when AI is supposed to be disabled.
  ai = {
    defineFlow: (config: any, handler: any) => {
      const flowName = typeof config === 'string' ? config : config.name;
      console.warn(`Attempted to define flow "${flowName}" but AI is disabled (GOOGLE_API_KEY missing).`);
      return async (...args: any[]) => {
        console.error(`Flow "${flowName}" cannot execute as AI is disabled.`);
        throw new Error(`Flow "${flowName}" cannot execute as AI is disabled.`);
      };
    },
    definePrompt: (config: any, handler: any) => {
      const promptName = typeof config === 'string' ? config : config.name;
      console.warn(`Attempted to define prompt "${promptName}" but AI is disabled (GOOGLE_API_KEY missing).`);
      return async (...args: any[]) => {
        console.error(`Prompt "${promptName}" cannot execute as AI is disabled.`);
        throw new Error(`Prompt "${promptName}" cannot execute as AI is disabled.`);
      };
    },
    generate: async (options: any) => {
      console.error('ai.generate called but AI is disabled (GOOGLE_API_KEY missing).');
      throw new Error('ai.generate cannot execute as AI is disabled.');
    },
    // Add stubs for any other ai.* methods that might be called by residual code.
    // This is a basic stub. For full type compatibility without casting,
    // all methods of GenkitType would need to be stubbed.
  } as GenkitType; // Cast to GenkitType. Some properties might be missing from the stub.
  console.log('[Genkit Init] Stub Genkit object provided. AI features are effectively disabled.');
}

export {ai};
