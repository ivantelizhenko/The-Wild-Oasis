import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://sjeajtpqjuikngdmpqmp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZWFqdHBxanVpa25nZG1wcW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NTQzODUsImV4cCI6MjAzNzMzMDM4NX0.MYlx5IEDBQ7eSpLl0OuSbqD4UQpBKfpuzuwqWp59cP0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
