import { createClient } from "@supabase/supabase-js";

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function submitContactMessage(contactMessage: ContactMessage) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase configuration. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { error } = await supabase.from("contact_messages").insert(contactMessage);

  if (error) {
    throw error;
  }
}
