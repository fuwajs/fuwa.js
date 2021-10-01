/** @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#json */
export enum JsonErrorCodes {
    GeneralError,
    UnknownAccount = 10001,
    UnknownApplication,
    UnknownChannel,
    UnknownGuild,
    UnknownIntegration,
    UnknownInvite,
    UnknownMember,
    UnknownMessage,
    UnknownPermissionOverwrite,
    UnknownProvider,
    UnknownRole,
    UnknownToken,
    UnknownUser,
    UnknownEmoji,
    UnknownWebhook,
    UnknownWebhookService,
    UnknownSession = 10020,
    UnknownBan = 10026,
    UnknownSKU,
    UnknownStoreListing,
    UnknownEntitlement,
    UnknownBuild,
    UnknownLobby,
    UnknownBranch,
    UnknownStoreDirectoryLayout,
    UnknownRedistributable = 10036,
    UnknownGiftCode = 10038,
    UnknownGuildTemplate = 10057,
    UnknownDiscoveryCategory = 10059,
    UnknownInteraction = 10062,
    UnknownApplicationCommand = 10063,
    UnknownApplicationCommandPermissions = 10066,
    UnknownGuildMemberVerificationForm = 10068,
    BotsCannotUseThisEndpoint = 20001,
    OnlyBotsCanUseThisEndpoint,
    ExplicitContentCannotBeSentToTheDesiredRecipient = 20009,
    YouAreNotAuthorizedToPerformThisActionOnThisApplication = 20012,
    ThisActionCannotBePerformedDueToSlowmodeRateLimit = 20016,
    OnlyTheOwnerOfThisAccountCanPerformThisAction = 20018,
    ThisMessageCannotBeEditedDueToAnnouncementRateLimits = 20022,
    TheChannelYouAreWritingHasHitTheWriteRateLimit = 20028,
    YourStageTopicContainsWordsThatAreNotAllowedForPublicStages = 20031,
    GuildPremiumSubscriptionLevelTooLow = 20035,
    MaximumNumberOfGuildsReached = 30001,
    MaximumNumberOfFriendsReached,
    MaximumNumberOfPinsReachedForTheChannel,
    MaximumNumberOfRecipientsReached,
    MaximumNumberOfGuildRolesReached,
    MaximumNumberOfWebhooksReached = 30007,
    MaximumNumberOfEmojisReached,
    MaximumNumberOfReactionsReached = 30010,
    MaximumNumberOfGuildChannelsReached = 30013,
    MaximumNumberOfAttachmentsInAMessageReached = 30015,
    MaximumNumberOfInvitesReached,
    MaximumNumberOfAnimatedEmojisReached = 30018,
    MaximumNumberOfServerMembersReached,
    MaximumNumberOfGuildDiscoverySubcategoriesHasBeenReached = 30030,
    GuildAlreadyHasTemplate = 30031,
    MaximumNumberOfBansForNonGuildMembersHaveBeenExceeded = 30035,
    MaximumNumberOfBansFetchesHasBeenReached = 30037,
    UnauthorizedProvideAValidTokenAndTryAgain = 40001,
    YouNeedToVerifyYourAccountInOrderToPerformThisAction,
    YouAreOpeningDirectMessagesTooFast,
    RequestEntityTooLargeTrySendingSomethingSmallerInSize = 40005,
    ThisFeatureHasBeenTemporarilyDisabledServerSide,
    ThisUserBannedFromThisGuild,
    TargetUserIsNotConnectedToVoice = 40032,
    ThisMessageHasAlreadyBeenCrossposted = 40033,
    AnApplicationCommandWithThatNameAlreadyExists = 40041,
    MissingAccess = 50001,
    InvalidAccountType,
    CannotExecuteActionOnADMChannel,
    GuildWidgetDisabled,
    CannotEditMessageAuthoredByAnotherUser,
    CannotSendAnEmptyMessage,
    CannotSendMessagesToThisUser,
    CannotSendMessagesInAVoiceChannel,
    ChannelVerificationLevelIsTooHighForYouToGainAccess,
    OAuth2ApplicationDoesNotHaveABot,
    OAuth2ApplicationLimitReached,
    InvalidOAuth2State,
    YouLackPermissionsToPerformThatAction,
    InvalidAuthenticationTokenProvided,
    NoteWasTooLong,
    ProvidedTooFewOrTooManyMessagesToDeleteMustProvideAtLeast2AndFewerThan100MessagesToDelete,
    AMessageCanOnlyBePinnedInTheChannelItWasSentIn = 50019,
    InviteCodeWasEitherInvalidOrTaken,
    CannotExecuteActionOnASystemMessage,
    CannotExecuteActionOnThisChannelType = 50024,
    InvalidOAuth2AccessTokenProvided,
    MissingRequiredOAuth2Scope,
    InvalidWebhookTokenProvided,
    InvalidRole,
    InvalidRecipients = 50033,
    AMessageProvidedWasTooOldToBulkDelete,
    InvalidFormBodyOrContentTypeProvided,
    AnInviteWasAcceptedToAGuildTheApplicationsBotIsNotIn,
    InvalidApiVersionProvided = 50041,
    CannotSelfRedeemThisGift = 50054,
    PaymentSourceRequiredToRedeemGift = 50070,
    CannotDeleteAChannelRequiredForCommunityGuilds = 50074,
    InvalidStickerSent = 50081,
    TriedToPerformAnOperationOnAnArchivedThreadSuchAsEditingAMessageOrAddingAUserToTheThread = 50083,
    InvalidThreadNotificationSettings,
    BeforeValueIsEarlierThanTheThreadCreationDate,
    TwoFactorIsRequiredForThisOperation = 60003,
    NoUsersWithDiscordTagExist = 80004,
    ReactionWasBlocked = 90001,
    ApiResourceIsCurrentlyOverloadedTryAgainALittleLater = 130000,
    AThreadHasAlreadyBeenCreatedForThisMessage = 160004,
    ThreadIsLocked = 160005,
    MaximumNumberOfActiveThreadsReached = 160006,
    MaximumNumberOfActiveAnnouncementThreadsReached = 160007,
}

/** @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#opcodes-and-status-codes */
export enum GatewayCloseEventCodes {
    UnknownError = 4000,
    UnknownOpcode,
    DecodeError,
    NotAuthenticated,
    AuthenticationFailed,
    AlreadyAuthenticated,
    InvalidSeq = 4007,
    RateLimited,
    SessionTimedOut,
    InvalidShard,
    ShardingRequired,
    InvalidApiVersion,
    InvalidIntents,
    DisallowedIntents,
}

/**
 * @link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export enum GatewayCodes {
    Dispatch,
    Heartbeat,
    Identify,
    StatusUpdate,
    VoiceStateUpdate,
    VoiceGuildPing,
    Resume,
    Reconnect,
    RequestGuildMembers,
    InvalidSession,
    Hello,
    HeartbeatAck,
}

/** @link https://discord.com/developers/docs/topics/opcodes-and-status-codes#http */
export enum HTTPResponseCodes {
    OKAY = 200,
    Created,
    NoContent = 204,
    NotModified = 304,
    BadRequest = 400,
    Unauthorized,
    Forbidden = 403,
    NotFound,
    MethodNotAllowed,
    TooManyRequests = 429,
    GatewayUnavailable = 502,
}

/** @link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc */
export enum RpcCloseEventCodes {
    InvalidClientId = 4000,
    InvalidOrigin,
    RateLimited,
    TokenRevoked,
    InvalidVersion,
    InvalidEncoding,
}

/** @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc */
export enum DiscordRpcErrorCodes {
    UnknownError = 1000,
    InvalidPayload = 4000,
    InvalidCommand = 4002,
    InvalidGuild,
    InvalidEvent,
    InvalidChannel,
    InvalidPermissions,
    InvalidClientId,
    InvalidOrigin,
    InvalidToken,
    InvalidUser,
    OAuth2Error = 5000,
    SelectChannelTimedOut,
    GetGuildTimedOut,
    SelectVoiceForceRequired,
    CaptureShortcutAlreadyListening,
}

/** @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice */
export enum VoiceCloseEventCodes {
    UnknownOpcode = 4001,
    FailedToDecodePayload,
    NotAuthenticated,
    AuthenticationFailed,
    AlreadyAuthenticated,
    SessionNoLongerValid,
    SessionTimedOut = 4009,
    ServerNotFound = 4011,
    UnknownProtocol,
    Disconnect = 4014,
    VoiceServerCrashed,
    UnknownEncryptionMode,
}

/** @see https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice */
export enum VoiceOpcodes {
    Identify,
    SelectProtocol,
    Ready,
    Heartbeat,
    SessionDescription,
    Speaking,
    HeartbeatACK,
    Resume,
    Hello,
    Resumed,
    ClientDisconnect = 13,
}
