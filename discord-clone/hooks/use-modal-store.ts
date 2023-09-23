import { Server } from "@prisma/client"
import { create } from "zustand"
export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"
  | "deleteServer"

export type channelType = "TEXT" | "VIDEO" | "AUDIO"

interface ModalData {
  server?: Server
}

interface ModalStore {
  type: ModalType | null
  data: ModalData
  channelType: channelType | null
  isOpen: boolean
  onOpen: (type: ModalType, data?: ModalData, channelType?: channelType) => void
  onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  channelType: null,
  isOpen: false,
  onOpen: (type, data = {}, channelType) =>
    set({ isOpen: true, type, data, channelType }),
  onClose: () => set({ type: null, isOpen: false }),
}))
