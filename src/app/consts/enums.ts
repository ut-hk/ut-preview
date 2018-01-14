/**
 * Created by leochoi on 3/7/2017.
 * This page should only contain server-side enums.
 */

export enum DescriptionType {
  Text = 0,
  ExternalImage = 1,
  InternalImage = 2,
  Youtube = 3
}

export enum FileType {
  Image = 0
}

export enum ImageSize {
  Large = 0,
  Medium = 1,
  Small = 2
}

export enum RatingStatus {
  Unrated = -1,
  Like = 0,
  Dislike = 1
}

export enum Gender {
  NotProvided = 1,
  Male = 2,
  Female = 3
}

export enum ChatRoomMessageType {
  Text = 0,
  InternalImage = 1,
  System = 2
}

export enum InvitationStatus {
  Pending = 0,
  Accepted = 1,
  Rejected = 2,
  Ignored = 3,
  Cancelled = 4
}

export enum Privacy {
  All = 0,
  ParticipantFriends = 10,
  OwnerFriends = 20,
  OnlyParticipants = 30,
}

export enum ModificationStatus {
  Unmodified = 0,
  Updated = 1,
  Created = 2,
  Deleted = 3
}
