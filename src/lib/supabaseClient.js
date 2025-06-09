import { createClient } from '@supabase/supabase-js'
import { env } from "$env/dynamic/public"

export const supabase = createClient(
	'https://dfaslevodpchdbeiebvn.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmYXNsZXZvZHBjaGRiZWllYnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNTk5MDcsImV4cCI6MjA1NjgzNTkwN30.xMG-vCuIOJT2sYChD722ru_daT8wIK5Y8WGgFw-CtNI'
);
