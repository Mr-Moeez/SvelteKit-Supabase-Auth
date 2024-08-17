import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cvkguncthlcqepdixyka.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2a2d1bmN0aGxjcWVwZGl4eWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NjUyMzEsImV4cCI6MjAyODI0MTIzMX0.oZu00aT9t0lWvS7s7KM-anmA-Uwz9tIDWGpYfcVTIRI"

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseKey);