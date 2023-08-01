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
      work_screenshots: {
        Row: {
          id: number
          image: string
          work_id: number
        }
        Insert: {
          id?: number
          image: string
          work_id: number
        }
        Update: {
          id?: number
          image?: string
          work_id?: number
        }
        Relationships: []
      }
      works: {
        Row: {
          background: string | null
          created_at: string | null
          description: string | null
          id: number
          name: string
          services: string | null
          slug: string
        }
        Insert: {
          background?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          services?: string | null
          slug: string
        }
        Update: {
          background?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          services?: string | null
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

