import { DateTime } from 'luxon';

export type ChatTopicType = 'Customer' | 'Chat Topic A' | 'Chat Topic B' | 'Chat Topic C';

export type ChatStatusType = 'New' | 'Open' | 'Closed';

export type ChatChannelType = 'Internal' | 'SMS' | 'Email' | 'Facebook' | 'Twitter';

export type CommsType = 'Phone Call' | 'Chat';

/**
 * A communication.
 */
export interface IComms {
  /// The communication type, Phone Call or Chat
  commsType: CommsType;

  /// [Optional] A phone number attached to this communication
  phoneNumber?: string;

  /// Creation date for this comms.
  createdAt: DateTime;
}

/**
 * A phone call.
 */
export interface IPhoneCall extends IComms {}

/**
 * A chat.
 */
export interface IChat extends IComms {
  /// Unique ID of this chat.
  chatId: string;

  /// [Optional] Job ID attached to this chat.
  jobId?: string;

  senderId: string;

  /// [Optional] ID of tech.
  techId?: string;

  /// Channel type.
  channel: ChatChannelType;

  /// List of responders engaged in conversation.
  currentResponders: string[];

  /// [Optional] The last message sent.
  lastMessage?: IChatMessage;

  /// The status of this chat.
  status: ChatStatusType;

  /// [Optional] The chat topic.
  topic?: ChatTopicType;

  /// A list of messages for this chat.
  messages: IChatMessage[];

  createdAt: DateTime;

  commsType: CommsType;
}

/**
 * A chat message
 */
export interface IChatMessage {
  /// Unique chat message id.
  chatMessageId: string;

  /// [Optional] This message's author, null if customer.
  authorId: string;

  /// The text content of this message.
  content: string;

  /// [Optional] Any attachments (string tokens) that represent images to be downloaded
  attachments?: string[];

  /// Read status
  read: boolean;

  /// Creation date
  createdAt: DateTime;
}
