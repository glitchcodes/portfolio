export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      works: {
        Row: {
          background: string | null
          created_at: string | null
          description: string | null
          id: number
          name: string
          slug: string
        }
        Insert: {
          background?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          slug: string
        }
        Update: {
          background?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

