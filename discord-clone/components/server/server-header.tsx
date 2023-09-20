"use client"

import { ServerWithMembersWithProfiles } from "@/tyoes"
import { MemberRole } from "@prisma/client"

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles
  role?: MemberRole
}

const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  return <div>Server Header</div>
}

export default ServerHeader
