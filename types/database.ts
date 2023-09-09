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
        Relationships: [
          {
            foreignKeyName: "work_screenshots_work_id_fkey"
            columns: ["work_id"]
            referencedRelation: "works"
            referencedColumns: ["id"]
          }
        ]
      }
      work_testimonials: {
        Row: {
          id: number
          reviewer: string | null
          reviewer_role: string | null
          testimony: string
          work_id: number
        }
        Insert: {
          id?: number
          reviewer?: string | null
          reviewer_role?: string | null
          testimony?: string
          work_id: number
        }
        Update: {
          id?: number
          reviewer?: string | null
          reviewer_role?: string | null
          testimony?: string
          work_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "work_testimonials_work_id_fkey"
            columns: ["work_id"]
            referencedRelation: "works"
            referencedColumns: ["id"]
          }
        ]
      }
      works: {
        Row: {
          background: string | null
          created_at: string | null
          description: string | null
          example_link: string | null
          example_title: string | null
          id: number
          is_hidden: boolean | null
          name: string
          services: string | null
          slug: string
        }
        Insert: {
          background?: string | null
          created_at?: string | null
          description?: string | null
          example_link?: string | null
          example_title?: string | null
          id?: number
          is_hidden?: boolean | null
          name: string
          services?: string | null
          slug: string
        }
        Update: {
          background?: string | null
          created_at?: string | null
          description?: string | null
          example_link?: string | null
          example_title?: string | null
          id?: number
          is_hidden?: boolean | null
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
