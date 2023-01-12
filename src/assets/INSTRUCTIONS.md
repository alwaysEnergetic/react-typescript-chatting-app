# OGD-CHAT UI SPECS

## INSTRUCTIONS

### Project Estimate 8-12 hrs

Create a React app UI that generally resembles the visual appearance in Illustration based on the requirements as specified below.

### Notes:

- The UI structure is already built for you (see project file)
- All the necessary objects are already defined
- All the data needed to feed the UI is set up in JSON documents
    - In this scenario a ‘Chat’ represents a conversation that consists of inbound and outbound messages. Each “Chat” conversion is stored as a JSON file

### Provided in this repository

- React Project with controls to test
- Chat data (JSON) file
  - Chat conversation is stored as a JSON file
    - Chat attributes define parameters of a given conversation
    - Chat conversation contains messages
  - Messages log chat interactions
    - Message attributes identify author and keep message specific meta data
- Data Model definitions (provided in src/interfaces)
- UI Illustration (png image)

## REQUIREMENTS

- FRONTEND ONLY - this project is just for building reactive components.
- FUNCTIONAL REACT COMPONENTS - use functions, not classes.
- TYPESCRIPT - use good typescript practices.
- NO EXTRA DEPENDENCIES - This repo has everything you need.
- MATERIAL-UI - Already included in this repo, leverage those components.
- FONT AWESOME ICONS ONLY - Already provided in this repo
- NO REDUX - Simply pass information via properties.
- Follow coding conventions in provided repo

## LAYOUT

UI layout is pre-built for you in the Project Template (provided)

UI contains 2 responsive columns side-by-side

This UI is to be ‘Reactive’ (data driven): i.e.  data updates without submit/refresh user interaction

## Scope

**Left Column:**

- **Header**

  - Button (New Chat) opening a dropdown:
    - TextField (userId)
    - TextField (chat message)
    - Button (send)
      
  - Button (Filtering) opening a dropdown:
    - Select 
    - TextField
    - Button (apply)
    
- **Body**

  - List of cards (chats)

- **Footer**

  - Status Bar (anchored to bottom of column

**Right Column**:

- **Header**
  - Simple header (same as chat card in list)
- **Body**
  - List of cards (messages)
- **Footer**
  - Message area
    - TextField (message)
    - Button (send)

## Details

### Left Column - List of chat conversations

**The left column has three sections: Header, Body and Footer**

**Header** provides controls to create a new chat conversation and filter the chat list.

- **Filter button** produces a dropdown with controls to select filtering criteria 
  - Select - Choose between Topic, SenderID, or Channel
  - TextField - Enter in filtering criteria
  - Button - Apply filter
    
- **New Chat Button**
  - Opens a dropdown that allows the user to instantiate a new chat conversation
    - TextField (Send to)
    - Select (Topic)
    - TextField (Message)
    - Button (Send)
  - Clicking Send creates a new chat with chatID, selects it in the list, and populates the message with this new chat

**Body** presents a list of chat conversations

  - **List** of chats presented as cards with chat info
    - Grouped by _CommsType_
    - Sorted by createdAt date (newest on top)
    - Clicking list item selects the chat conversation, displays messages on the right.
    - **List items display the following information:**
      - Sender - name, ph#, handle, etc
      - Author(s) - Avatar circle with initials
      - Topic (only appears when the channel equals “internal”)
      - Channel (can be a badge, icon or color indicator)
      - Status (visual indicator such as background color) - new/awaiting response, active, closed

- **Footer** anchored at bottom of column
  - Provides stats on incoming calls/messages
    - For now, just show time of last response

### Right Column - Currently selected chat

**The right column has three sections: Header, Body and Footer**


**Header** presents the chat's identifying information
  
  - Should be identical to the selected list item in Left Column

**Body** presents the message stream 
  
  - Messages are presented as a list of dialogue cards
    - Incoming messages (authorID !== userID) are on the left
    - Outgoing messages (authorID === userID) are on the right
  - Each message may have an indicator (Avatar with initials) identifying the author.

**Footer** presents anchored at bottom with a message text box and send button:
  - **Text Box** (Message) for inputting message
  - **Button** (Send) for posting message
    - For the purpose of this project, we're only going to append the message json to the chat messages, no transport layer or sockets.
    
## Acceptance criteria:

1. Sending Messages
    1. Enter test message into text box
    2. Click send -> app appends test message to the JSON sample file
    3. New message appears in the conversation stream.
2. Receiving messages
    1. Use the provided controls to create a new random message 
    2. New message appears in the conversation stream.
3. Selecting a chat stream
    1. Click on an item list on the left
    2. Message stream shows messages for that chat.
4. Starting a new chat
    1. Click on the create chat button on lefthand side header
    2. Type in a userID into a popup textfield and click Send
    3. New chat is created, selected on the left, and message stream should be empty.
4. Filtering chat list
    1. Click on Filter button - opens up dropdown 
    2. Select a filtering criteria from a Select input (topic, senderID, or channel).
    3. Type into textfield next to Select
    4. Press Submit
    5. List options are filtered
