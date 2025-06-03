Need to install the following packages:
supabase@2.24.3
Ok to proceed? (y) 

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          username: string | null
          website: string | null
          avatar_url: string | null
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          username?: string | null
          website?: string | null
          avatar_url?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          username?: string | null
          website?: string | null
          avatar_url?: string | null
          updated_at?: string
        }
      }
    }
  }
} 