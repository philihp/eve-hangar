export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      asset: {
        Row: {
          character_id: number | null
          created_at: string
          id: number
          is_blueprint_copy: boolean
          is_singleton: boolean
          item_id: number
          location_flag: Database["public"]["Enums"]["location_flag"]
          location_id: number
          location_type: Database["public"]["Enums"]["location_type"]
          quantity: number
          type_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          character_id?: number | null
          created_at?: string
          id?: number
          is_blueprint_copy?: boolean
          is_singleton: boolean
          item_id: number
          location_flag: Database["public"]["Enums"]["location_flag"]
          location_id: number
          location_type: Database["public"]["Enums"]["location_type"]
          quantity: number
          type_id: number
          updated_at?: string
          user_id?: string
        }
        Update: {
          character_id?: number | null
          created_at?: string
          id?: number
          is_blueprint_copy?: boolean
          is_singleton?: boolean
          item_id?: number
          location_flag?: Database["public"]["Enums"]["location_flag"]
          location_id?: number
          location_type?: Database["public"]["Enums"]["location_type"]
          quantity?: number
          type_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "asset_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "character"
            referencedColumns: ["id"]
          }
        ]
      }
      character: {
        Row: {
          created_at: string
          id: number
          name: string
          owner: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          owner: string
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          owner?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      token: {
        Row: {
          access_token: string
          character_id: number | null
          created_at: string
          expires_at: string
          id: number
          issued_at: string
          refresh_token: string
          scope: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          character_id?: number | null
          created_at?: string
          expires_at: string
          id?: number
          issued_at: string
          refresh_token: string
          scope?: string[]
          updated_at?: string
          user_id?: string
        }
        Update: {
          access_token?: string
          character_id?: number | null
          created_at?: string
          expires_at?: string
          id?: number
          issued_at?: string
          refresh_token?: string
          scope?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "token_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "character"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      location_flag:
      | "AssetSafety"
      | "AutoFit"
      | "BoosterBay"
      | "Cargo"
      | "CorporationGoalDeliveries"
      | "CorpseBay"
      | "Deliveries"
      | "DroneBay"
      | "FighterBay"
      | "FighterTube0"
      | "FighterTube1"
      | "FighterTube2"
      | "FighterTube3"
      | "FighterTube4"
      | "FleetHangar"
      | "FrigateEscapeBay"
      | "Hangar"
      | "HangarAll"
      | "HiSlot0"
      | "HiSlot1"
      | "HiSlot2"
      | "HiSlot3"
      | "HiSlot4"
      | "HiSlot5"
      | "HiSlot6"
      | "HiSlot7"
      | "HiddenModifiers"
      | "Implant"
      | "LoSlot0"
      | "LoSlot1"
      | "LoSlot2"
      | "LoSlot3"
      | "LoSlot4"
      | "LoSlot5"
      | "LoSlot6"
      | "LoSlot7"
      | "Locked"
      | "MedSlot0"
      | "MedSlot1"
      | "MedSlot2"
      | "MedSlot3"
      | "MedSlot4"
      | "MedSlot5"
      | "MedSlot6"
      | "MedSlot7"
      | "MobileDepotHold"
      | "QuafeBay"
      | "RigSlot0"
      | "RigSlot1"
      | "RigSlot2"
      | "RigSlot3"
      | "RigSlot4"
      | "RigSlot5"
      | "RigSlot6"
      | "RigSlot7"
      | "ShipHangar"
      | "Skill"
      | "SpecializedAmmoHold"
      | "SpecializedAsteroidHold"
      | "SpecializedCommandCenterHold"
      | "SpecializedFuelBay"
      | "SpecializedGasHold"
      | "SpecializedIceHold"
      | "SpecializedIndustrialShipHold"
      | "SpecializedLargeShipHold"
      | "SpecializedMaterialBay"
      | "SpecializedMediumShipHold"
      | "SpecializedMineralHold"
      | "SpecializedOreHold"
      | "SpecializedPlanetaryCommoditiesHold"
      | "SpecializedSalvageHold"
      | "SpecializedShipHold"
      | "SpecializedSmallShipHold"
      | "StructureDeedBay"
      | "SubSystemBay"
      | "SubSystemSlot0"
      | "SubSystemSlot1"
      | "SubSystemSlot2"
      | "SubSystemSlot3"
      | "SubSystemSlot4"
      | "SubSystemSlot5"
      | "SubSystemSlot6"
      | "SubSystemSlot7"
      | "Unlocked"
      | "Wardrobe"
      location_type: "station" | "solar_system" | "item" | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
    Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
    Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof Database["public"]["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
