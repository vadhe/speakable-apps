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
      words: {
        Row: {
          definition_en: string | null
          definition_id: string | null
          example_en: string | null
          example_id: string | null
          id: number
          word: string | null
        }
        Insert: {
          definition_en?: string | null
          definition_id?: string | null
          example_en?: string | null
          example_id?: string | null
          id?: number
          word?: string | null
        }
        Update: {
          definition_en?: string | null
          definition_id?: string | null
          example_en?: string | null
          example_id?: string | null
          id?: number
          word?: string | null
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
