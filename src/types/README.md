### do not edit supabase.ts

this file is generated, and keep the server authoritative about the types, it's
not a mistake, i won't regret this. let's just commit and hope it isn't fragile.

regenerate it with

```zsh
npx supabase gen types typescript --project-id "$SUPABASE_PROJECT_REF" --schema public >! src/types/supabase.ts
```
