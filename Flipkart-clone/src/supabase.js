import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://lgzwlfskrllpcuwgaqlb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnendsZnNrcmxscGN1d2dhcWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMTg0MTYsImV4cCI6MjAxODc5NDQxNn0.QtjU4oSDWeRrl-gc8CbWnDRpqn0I9Vq1jZf8Lb99RMw");

export default supabase