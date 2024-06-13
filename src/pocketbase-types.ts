// Ajoutez en haut les imports et enums nécessaires si ce n'est pas déjà fait
import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
  Agent = 'agent',
  Artiste = 'artiste',
  Event = 'event',
  Maison = 'maison',
  Users = 'users',
  Tuto = 'tuto' // Ajoutez cette ligne pour la nouvelle collection
}

// Record types for each collection

// Ajoutez le type pour Tuto
export type TutoRecord = {
  nom?: string
  img?: string
  description?: string
}

// Response types include system fields and match responses from the PocketBase API

// Ajoutez le type pour TutoResponse
export type TutoResponse<Texpand = unknown> = Required<TutoRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  agent: AgentRecord
  artiste: ArtisteRecord
  event: EventRecord
  maison: MaisonRecord
  users: UsersRecord
  tuto: TutoRecord // Ajoutez cette ligne
}

export type CollectionResponses = {
  agent: AgentResponse
  artiste: ArtisteResponse
  event: EventResponse
  maison: MaisonResponse
  users: UsersResponse
  tuto: TutoResponse // Ajoutez cette ligne
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'agent'): RecordService<AgentResponse>
  collection(idOrName: 'artiste'): RecordService<ArtisteResponse>
  collection(idOrName: 'event'): RecordService<EventResponse>
  collection(idOrName: 'maison'): RecordService<MaisonResponse>
  collection(idOrName: 'users'): RecordService<UsersResponse>
  collection(idOrName: 'tuto'): RecordService<TutoResponse> // Ajoutez cette ligne
}
