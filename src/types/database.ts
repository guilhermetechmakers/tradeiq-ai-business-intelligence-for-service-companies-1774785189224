export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'owner' | 'admin' | 'manager' | 'technician'

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          vertical: string | null
          timezone: string
          currency: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          vertical?: string | null
          timezone?: string
          currency?: string
        }
        Update: Partial<Database['public']['Tables']['companies']['Insert']>
      }
      profiles: {
        Row: {
          id: string
          company_id: string | null
          email: string
          display_name: string | null
          role: UserRole
          phone: string | null
          language: string
          created_at: string
        }
        Insert: {
          id: string
          company_id?: string | null
          email: string
          display_name?: string | null
          role?: UserRole
          phone?: string | null
          language?: string
        }
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      integration_connections: {
        Row: {
          id: string
          company_id: string
          type: string
          status: string
          last_sync: string | null
          metadata: Json
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          type: string
          status?: string
          last_sync?: string | null
          metadata?: Json
        }
        Update: Partial<
          Database['public']['Tables']['integration_connections']['Insert']
        >
      }
      jobs: {
        Row: {
          id: string
          company_id: string
          customer_name: string
          status: string
          scheduled_at: string | null
          assigned_to: string | null
          linked_thread_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          customer_name: string
          status?: string
          scheduled_at?: string | null
          assigned_to?: string | null
          linked_thread_id?: string | null
        }
        Update: Partial<Database['public']['Tables']['jobs']['Insert']>
      }
      invoices: {
        Row: {
          id: string
          company_id: string
          external_id: string | null
          amount: number
          due_date: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          external_id?: string | null
          amount: number
          due_date?: string | null
          status?: string
        }
        Update: Partial<Database['public']['Tables']['invoices']['Insert']>
      }
      leads: {
        Row: {
          id: string
          company_id: string
          source: string
          contact: string
          stage: string
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          source: string
          contact: string
          stage?: string
        }
        Update: Partial<Database['public']['Tables']['leads']['Insert']>
      }
      documents: {
        Row: {
          id: string
          company_id: string
          source: string
          extracted_text: string | null
          meta: Json
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          source: string
          extracted_text?: string | null
          meta?: Json
        }
        Update: Partial<Database['public']['Tables']['documents']['Insert']>
      }
      interview_transcripts: {
        Row: {
          id: string
          company_id: string
          template_type: string
          transcript_text: string
          tags: string[] | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          template_type: string
          transcript_text: string
          tags?: string[] | null
        }
        Update: Partial<
          Database['public']['Tables']['interview_transcripts']['Insert']
        >
      }
      improvement_plans: {
        Row: {
          id: string
          company_id: string
          domain: string
          actions: Json
          generated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          domain: string
          actions: Json
          generated_at?: string
        }
        Update: Partial<
          Database['public']['Tables']['improvement_plans']['Insert']
        >
      }
      chat_sessions: {
        Row: {
          id: string
          company_id: string
          user_id: string
          messages: Json
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          messages?: Json
        }
        Update: Partial<Database['public']['Tables']['chat_sessions']['Insert']>
      }
      payment_transactions: {
        Row: {
          id: string
          company_id: string
          stripe_id: string | null
          amount: number
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          stripe_id?: string | null
          amount: number
          status: string
        }
        Update: Partial<
          Database['public']['Tables']['payment_transactions']['Insert']
        >
      }
      audit_logs: {
        Row: {
          id: string
          company_id: string | null
          user_id: string | null
          action: string
          details: Json
          created_at: string
        }
        Insert: {
          id?: string
          company_id?: string | null
          user_id?: string | null
          action: string
          details?: Json
        }
        Update: Partial<Database['public']['Tables']['audit_logs']['Insert']>
      }
      notifications: {
        Row: {
          id: string
          company_id: string
          user_id: string
          title: string
          body: string | null
          read_at: string | null
          deep_link: string | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          title: string
          body?: string | null
          read_at?: string | null
          deep_link?: string | null
        }
        Update: Partial<Database['public']['Tables']['notifications']['Insert']>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
