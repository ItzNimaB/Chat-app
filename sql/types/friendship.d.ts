declare namespace friendship {
  export interface referencing {
    user1: user;
    user2: user;
  }

  export interface referenced {}
}

interface friendship extends friendship.referencing, friendship.referenced {
  uuid: UUID;
  user1_uuid: user["uuid"];
  user2_uuid: user["uuid"];
  created_at: Date;
}
