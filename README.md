# <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/hv2.png?updatedAt=1749919993925" alt="InVision Logo" width="40"/> Helixure - Spiral of Integrity

### Quick Access Link : https://helixurev2-0.netlify.app/

### Author : Kshitij K Sawant

---

[![Watch the video](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Helixure%20Link%20custom%20Thumbnail.png?updatedAt=1751049094482)](https://drive.google.com/file/d/1CaQTuMpj38Xr2Fk8Rni4LxiVKg5AwXBe/view?usp=sharing)

---

## Introduction

**Helixure v2.0** is an advanced, decentralized collaborative platform that transforms the way individuals and teams interact with ideas, data, and digital assets. Inspired by the elegance of the helix — a symbol of structured evolution — Helixure combines the reliability of blockchain with the fluidity of creative collaboration.

Built using modern web technologies like **React.js**, **Supabase**, **Three.js**, and **D3.js**, Helixure offers a visual and secure environment where users can create, connect, and store information as immutable blocks. Whether operating in a **private space** or a **shared environment**, each interaction is timestamped, cryptographically hashed, and visually rendered — enabling transparent knowledge construction.

Designed for researchers, developers, educators, and innovators, Helixure isn’t just a whiteboard — it’s a **ledger of trust**, a **space for collective intelligence**, and a **canvas where every block tells a story**. With features like **Proof of Work**, **Role-Based Access Control (RBAC)**, and **gas tracking**, Helixure bridges the gap between traditional collaboration tools and Web3-native systems.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Landing Page</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/1.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

---

### Etymology and Meaning

- **Helix**:
  Refers to a spiral or coiled shape, often symbolic of **growth**, **evolution**, and **continuity**. It's widely associated with **DNA**, representing knowledge, information, and identity encoded in a precise structure.

- **-ure** suffix (from **Structure**, **Secure**, or **Nature**):
  Represents **foundation**, **form**, or **state of being** — giving the word a sense of **stability**, **integrity**, and **systematic design**.

**Implied Meaning : Helix + Secure** →
_“A secure, evolving chain of blocks — representing decentralized trust and information integrity.”_

---

## Background

In today’s collaborative landscape, traditional whiteboards and centralized productivity tools often fall short when it comes to ensuring transparency, data ownership, and auditability. As organizations and research teams increasingly move toward decentralized collaboration, there is a growing demand for systems that not only foster creativity but also **record trust**, **track contributions**, and **secure interactions**.

Helixure was born out of this need — to reimagine the digital whiteboard through the lens of **blockchain technology**. The idea originated during the development of academic tools for secure project tracking and quickly evolved into a full-fledged platform that blends the power of decentralized identity, immutable records, and real-time collaboration.

---

## Features

Helixure is more than a digital canvas — it is a **blockchain-powered collaborative environment** designed for transparency, trust, and traceability. Below are the key features that set it apart:

---

### Feature 1: Authentication (Signup, Signin, Signout)

Helixure ensures a secure and seamless authentication experience for users across private and shared environments.

#### I. Signup

- **Flow**: New users can register via an email and password-based form.
- **Metadata Storage**: Upon successful registration, user metadata (name, email, date of birth, phone, etc.) is stored in the `profiles` table using Supabase.
- **Auto Redirect**: Users are redirected to the `/profile` page to complete their profile setup post-registration.
- **Validation**: Fields are validated for format, completeness, and uniqueness in real-time.
<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Signup Page</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/2.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

#### II. Signin

- **Flow**: Existing users log in with their registered email and password.
- **Session Management**: Upon successful login, Supabase returns an active session token.
- **Route Protection**: Only authenticated users can access protected routes like `/playground`, `/whiteboard`, and `/profile`.
<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Signin Page</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/3.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

#### III. Signout

- **Single Click Logout**: Users can sign out from anywhere in the app.
- **Session Cleanup**: The session is invalidated on both client and Supabase backend.
- **Auto Redirect**: Users are redirected to the `/signin` page post-logout for security and clarity.

#### Tech Stack

- **Supabase Auth**: Handles session tokens, user metadata, and real-time session validation.

---

## Feature 2: Profile Page

The Profile Page in **Helixure v2.0** provides a streamlined interface for users to manage their account information and personalize their identity across the platform.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Profile Dashboard </strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/6.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

#### I. User Information

Displays key user details:

- Full name, date of birth, phone number
- Email, company, designation
- Tagline and short bio

#### II. Avatar & Status

- Users can upload a profile image or select a default avatar
- A status selector allows setting current visibility (e.g., Open, Busy)

#### III. Account Controls

- Edit Profile to update personal info
- Secure Sign Out option
- “Member Since” info showing user’s registration date

#### IV. Purpose

To empower users with control over their profile and enable a consistent, personalized presence in shared and private spaces.

Here is a concise and formal write-up for **Feature 3: Playground**:

---

## Feature 3: Playground

The **Playground** in _Helixure v2.0_ is the core environment where users create and manage blockchain-powered private whiteboards. It offers structured spaces for visual collaboration, experimentation, and knowledge management.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Playground </strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/50.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

#### I. Space Management

- Users can create multiple **private environments (spaces)**
- Each space includes a title, description, and two selected theme colors
- View and filter spaces as **Private** or **Shared**

#### II. Interaction & Navigation

- Users can toggle between **Grid View** and **List View** for flexible browsing
- Spaces are displayed as dynamic cards containing metadata and color themes

#### III. Core Functionalities

- Initiate whiteboards directly from any space
- Access instructions, create blocks, or monitor gas usage
- Join shared spaces via invite links and participate collaboratively

#### IV. Purpose

To provide users with an organized interface for launching, accessing, and managing their blockchain whiteboards efficiently—whether working solo or in a team.

---

## Feature 4: Space Mechanism

The **Space Mechanism** in _Helixure v2.0_ serves as the foundational structure enabling secure, interactive, and decentralized collaboration. Each space operates as a private or shared blockchain-powered canvas, allowing users to add blocks, engage with peers, and visualize immutable interactions. Below are the core components that define its operation:

#### I. Space Creation

When a user creates a space via the Playground:

- A **new UUID-based record** is generated in the `playground` or `shared_playground` table.
- The user is prompted to input a **title**, **description**, and choose **two theme colors**.
- The space is assigned to the creator, who can then add blocks, invite collaborators, or customize visual settings.
- Private spaces are exclusive to the creator, while shared spaces allow for collaborative participation through invite codes.
<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>New Space Modal</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/9.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

#### II. Proof of Work (PoW) Mini Games

To ensure computational effort and fairness in block creation:

- Users are required to complete a **randomly selected mini game** (e.g., drag-sort, slider puzzle, math quiz) before submitting a block.
- Successful completion of the game serves as a lightweight **Proof of Work**, simulating real-world blockchain mining.
- The output includes:

  - `gasUsed` value, which depends on the difficulty
  - `powGameName`, recorded for auditability

- Only after solving the PoW game can the user proceed to create a valid block on the whiteboard.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>PoW Mini Game : Slide Block</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/24.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>
#### III. Proof of History (PoH)

To timestamp blocks and enhance trust:

- Each block is assigned a **color-coded timestamp**, visually encoding:

  - **Day of the week** → determines the block’s background base color.
  - **Time of the day** → adjusts the hue to represent morning, afternoon, evening, or night.

- This visual mapping of time creates a _Proof of History_ layer, allowing users to intuitively understand the chronological placement of blocks without relying solely on textual timestamps.
<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>PoH working</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/13.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

#### IV. Gas Meter

To quantify block creation effort:

- Each space maintains a **cumulative gas meter** (`total_gas` field).
- When a block is created:

  - If PoW is **enabled**, the `gas` value is computed based on game complexity.
  - If PoW is **disabled**, a default baseline gas value (e.g., `0.000028`) is applied.

- The **gas meter** reflects total effort in that space and acts as an engagement or contribution tracker, especially useful in collaborative environments.
- Users can toggle the visibility of the gas meter via the whiteboard interface.
<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Gas Meter Gauge</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/21.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

---

## Private Space

A **Private Space** in Helixure v2.0 is a personalized, secure blockchain-enabled environment where a single user can independently manage, visualize, and document their data without external collaboration. It serves as a self-owned digital whiteboard that leverages blockchain principles such as immutability, timestamping, and proof mechanisms to ensure integrity and traceability of every interaction.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Private Space</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/27.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

#### I. Ownership and Access

- Each private space is **created and owned by a single user**, with no external collaborators.
- Only the creator can:

  - Add or edit blocks.
  - View the chronological block history.
  - Monitor gas usage and visual timelines.

- Access is fully restricted and authenticated using the user’s login credentials (Supabase Auth).

#### II. Functional Capabilities

- Users can **create blocks** with title, description, metadata, and optional file uploads.
- Blocks are added through an interface that optionally includes **Proof of Work (PoW)** validation games.
- Every block is linked with a **Proof of History (PoH)** color scheme and **gas value**.

#### III. Visualization Modes

- The private space supports two core visualization options:

  1. **Card View** – Displays each block as a modular, movable card with metadata and action logs.
  2. **Flow View** – Uses React Flow to show the blockchain-like linkage between blocks in a node-based layout.

#### IV. Data Integrity

- All data within the private space is stored in **Supabase** and visually rendered using **D3.js and React Flow**.
- Users cannot alter or delete past blocks once created, preserving the principle of **immutability**.
- The private space effectively functions as a **personal ledger or journal** backed by blockchain structure.

#### V. Use Cases

- Ideal for individual research, journaling, process documentation, personal learning logs, or activity tracking.
- Enables decentralized verification of personal progress with timestamped records.

---

## Shared Space

A **Shared Space** is a collaborative blockchain-powered environment in Helixure v2.0 where multiple authenticated users can co-create, visualize, and interact within a unified digital whiteboard. It supports real-time contributions and decentralized team interaction, governed by structured permissions and roles.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Shared Space</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/42.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>
#### I. Ownership and Access Control

- A shared space is **created and owned by a single user** (space owner).
- The owner can invite others via:

  - **Invite code**
  - **Direct user assignment**

- Users join as **members** with defined roles (e.g., editor, viewer, contributor).
- Access is enforced through **Role-Based Access Control (RBAC)** with join time logging and invite expiration settings.

#### II. Functional Capabilities

- Multiple users can **add blocks**, **link blocks**, and **view contributions** simultaneously.
- Each block tracks metadata such as:

  - Creator name, designation, and avatar
  - Block title, description, and files
  - Gas usage and visual identifiers

- Shared blocks support **chain-of-trust**, ensuring data consistency across contributors.

#### III. Collaborative Tools

- Includes **live chat**, **activity logs**, and **session tracking**.
- **Link blocks visually** to represent idea flow or logical dependencies.
- Collaborative whiteboarding is synchronized using Supabase Realtime and React Flow rendering.

#### IV. Proof Mechanisms

- Contributions can be gated through **Proof of Work (PoW)** mini-games to simulate effort.
- Each block is timestamped and colored using a **Proof of History (PoH)** model based on creation time and date.
- Gas is tracked per block and **aggregated at the space level** for transparency.

#### V. Use Cases

- Ideal for collaborative projects, team research, classroom collaboration, open innovation boards, or DAOs.
- Enables verifiable contributions, versioning, and timeline-based knowledge visualization.

---

### Private vs Shared Space – Comparison Table

| Feature / Aspect       | Private Space                        | Shared Space                                  |
| ---------------------- | ------------------------------------ | --------------------------------------------- |
| Ownership              | Individual only                      | Single owner with multiple collaborators      |
| Access                 | Exclusive to creator                 | Invite-based with role management             |
| Contributors           | One                                  | Many                                          |
| Collaboration          | Not supported                        | Real-time collaboration supported             |
| Roles                  | Not applicable                       | Owner, Member, Guest                          |
| Block Creation         | By owner only                        | By any authorized member                      |
| Chat / Messaging       | Not available                        | Available with user avatars and timestamps    |
| Linking of Blocks      | Not supported                        | Supported (source–target flow representation) |
| Proof of Work (PoW)    | Optional                             | Optional (enforced per space policy)          |
| Proof of History (PoH) | Applied based on timestamp           | Applied based on timestamp                    |
| Gas Meter              | Tracked individually                 | Tracked and aggregated for the space          |
| Use Case               | Journaling, Solo R\&D, Personal Logs | Teamwork, Projects, Collaborative Boards      |
| Visualization Modes    | Card View, Flow View                 | Card View, Flow View                          |
| Data Privacy           | Fully private                        | Partially public (depending on roles)         |

---

## Blockchain Whiteboard

The **Blockchain Whiteboard** module in _Helixure v2.0_ represents a secure, decentralized environment where each user owns a **dedicated personal space** to record, simulate, and visualize blockchain interactions. Built on the principle of _"One User, One Space,"_ this feature ensures that each user's blockchain activities are isolated, traceable, and individually verifiable, supporting both academic research and technical prototyping.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Blockchain Space</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/45.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>
### Core Philosophy

In this private environment, users interact with real blockchain mechanisms on the **Ethereum Sepolia Testnet**. Each block creation, transaction, and visual linkage is authenticated, timestamped, and recorded, reinforcing the platform's commitment to transparency, education, and security.

### Key Features

**I. Wallet Authentication and Network Enforcement**
Upon accessing the whiteboard, users must connect their **MetaMask wallet**. The system enforces the use of the **Sepolia Testnet**, ensuring that all operations occur within a safe, testable Ethereum environment.

**II. Block Creation with Proof-of-Work (PoW)**
Users initiate a new block by submitting a title and message. A PoW mini-game is required to validate intent. Upon completion, MetaMask prompts for transaction approval, after which the block is minted and recorded on-chain.

**III. Proof of History (PoH)**
Each block is visually color-coded based on the time and day of creation, introducing a human-friendly representation of chronological order, useful for reviewing time-based workflows and progress.

**IV. Gas Meter Tracking**
A persistent gas meter at the bottom of the whiteboard calculates and displays **total Sepolia ETH spent** by the user across all interactions, providing cost transparency.

**V. Visual Interaction and Modes**
The canvas supports both:

- **Card View**: Shows metadata, hash, and gas used in a compact format.
- **Flow View**: Displays blocks and their connections in a React Flow layout for better understanding of block relationships.

**VI. SVG Block Linking with Notes**
Users can link blocks together and annotate these connections, simulating dependencies, logical flows, or conceptual groupings—ideal for documentation or pedagogy.

---

## Database Schema

### I. Design Overview

The **Helixure v2.0** database schema is structured to support both **private** and **shared blockchain environments**, enabling personalized and collaborative workspaces. The design emphasizes **data integrity**, **traceability**, and **secure role-based access**, while integrating core features such as block creation, linking, chat, and audit logging.

### II. Main Entities

| Entity                      | Description                                                                 |
| --------------------------- | --------------------------------------------------------------------------- |
| `profiles`                  | Stores user metadata: name, email, avatar, status, bio, etc.                |
| `playground`                | Represents **private spaces** where individual users create/manage blocks.  |
| `shared_playground`         | Represents **shared spaces** owned by a user and accessed by collaborators. |
| `space_block_table`         | Stores blocks created in **private whiteboards**.                           |
| `shared_block_table`        | Stores blocks within **shared whiteboards**.                                |
| `shared_playground_links`   | Records links (edges) between blocks in shared spaces.                      |
| `shared_playground_members` | Manages collaborators and their roles: Owner, Editor, Viewer.               |

### III. Supporting Entities

| Entity             | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `invites`          | Manages secure invitation codes and joining mechanisms.                    |
| `space_chat_table` | Captures chat messages within shared or private spaces.                    |
| `space_log_table`  | Maintains a full **audit log** of actions like block creation, edits, etc. |
| `space_sessions`   | Tracks active sessions and user activity within spaces.                    |

### IV. Key Relationships

- `user_id` in `profiles` is a **foreign key** linking users to their respective spaces.
- Each block (private/shared) is linked to its **space_id** and **creator_id**.
- `shared_playground_links` define **directed connections** between `source_block_id` and `target_block_id`.
- `shared_playground_members` assign **roles** and permissions to users within a shared space.
- `logs`, `chats`, and `sessions` link back to both the **user** and the **space** to enable full traceability.

### V. Constraints & Data Integrity

- **Primary Keys**: All entities use UUIDs to ensure global uniqueness.
- **Foreign Keys**: Enforce referential integrity across tables.
- **Constraints**:

  - Gas values must be non-negative.
  - Invite codes are unique per space.
  - Block hash chains maintain validity by referencing existing previous hashes.

### VI. Scalability & Security

- The schema follows **3rd Normal Form (3NF)** to eliminate redundancy and ensure efficient data storage.
- **Role-Based Access Control (RBAC)** is enforced through the `shared_playground_members` table to protect shared data.
- Full **audit logs** allow historical tracking of every critical operation.
- Designed to scale for educational, research, and production-grade environments while supporting **PoW, PoH, gas usage**, and **smart identity verification**.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Database ER Diagram</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/DB.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

---

## Chatbot Integration

### I. Overview

Helixure v2.0 incorporates an intelligent, embedded chatbot system powered by **Botpress**, designed to enhance user experience and provide real-time assistance across the platform. This support bot functions as a **conversational interface** for onboarding, guidance, and system navigation—particularly valuable in blockchain-centric environments where usability and trust are paramount.

<div style="border: 2px solid #ddd; border-radius: 10px; padding: 10px; margin: 10px 0;">
    <strong>Chat Bot : Bot Press</strong><br>
    <img src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Screenshots/51.png?updatedAt=1751134632813" width="100%" style="border-radius: 10px;">
</div>

### II. Technical Integration

The chatbot is seamlessly integrated into the Helixure web application using the **Botpress Webchat module**. Upon loading the application, the chatbot initializes and remains available as a floating widget on every page. It is styled consistently with the Helixure brand using a **custom color theme** and iconography.

Key integration steps include:

- **Embedding Botpress Chat Widget** via `<script>` and configuration in the app layout.
- Connecting the chatbot to a **Botpress server instance** with secure endpoints.
- Assigning specific **chat triggers**, such as keywords or user events (e.g., opening a Shared Space).
- Implementing **context-aware flows** using natural language understanding (NLU) pipelines.

### III. Functionality

The Helixure chatbot can:

- Answer **frequently asked questions** about Shared Spaces, Profiles, MetaMask connections, and gas tracking.
- Guide new users through **onboarding and wallet setup**.
- Provide **step-by-step help** on creating or linking blockchain blocks.
- Offer suggestions and definitions pulled from a dynamic **knowledge base**.

### IV. Knowledge Base and Maintenance

The core intelligence behind the chatbot resides in a curated **Knowledge Base** and custom **NLU flows**, built and managed within the Botpress admin interface. This knowledge base is updated regularly based on:

- **User interaction logs** and feedback.
- **Platform updates**, such as new features in Shared Spaces or Whiteboard tools.
- Documentation and support team inputs.

Updates are deployed with minimal disruption, ensuring the chatbot evolves alongside the Helixure ecosystem.

### V. Benefits

- Ensures **24/7 support** availability within the platform.
- Reduces **manual intervention** for routine queries.
- Provides **personalized, real-time responses** based on user context.
- Enhances **user retention and confidence** in navigating technical processes like MetaMask authentication and gas calculations.

---

## Technology Stack

**Helixure v2.0** is developed using modern frameworks and tools across web development, blockchain, real-time interaction, and conversational AI. The stack is optimized for performance, modularity, and extensibility.

### I. Frontend Technologies

| Technology                               | Purpose                                                                     |
| ---------------------------------------- | --------------------------------------------------------------------------- |
| **React.js**                             | Component-based UI framework for building responsive web interfaces.        |
| **Vite**                                 | Fast build tool and dev server for efficient module bundling.               |
| **Tailwind CSS + Flowbite**              | Utility-first CSS framework with component kits for consistent UI design.   |
| **Framer Motion / GSAP**                 | Adds animated transitions and motion effects for enhanced user experience.  |
| **React Router DOM**                     | Manages page navigation and SPA routing.                                    |
| **React Toastify**                       | Provides real-time toast notifications for system alerts and feedback.      |
| **React Helmet**                         | Enables dynamic management of page titles and metadata.                     |
| **React Flow / Dagre / ELK.js**          | Powers the visual flow layout for blockchains within the whiteboard module. |
| **D3.js / Fabric.js**                    | Handles custom SVG/canvas drawing and data-driven visuals.                  |
| **Three.js / @react-three/fiber / drei** | Used for optional 3D and immersive components.                              |

### II. Blockchain & Web3 Integration

| Technology         | Purpose                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Supabase**       | Backend-as-a-Service (BaaS) offering authentication, PostgreSQL database, file storage, and real-time capabilities. |
| **Ethers.js**      | JavaScript library for interacting with Ethereum blockchain, particularly Sepolia testnet.                          |
| **MetaMask**       | Wallet integration to sign and confirm blockchain transactions.                                                     |
| **@web3auth**      | Manages wallet login and multi-adapter authentication options.                                                      |
| **SHA3 / BlakeJS** | Provides secure cryptographic hash functions for block integrity.                                                   |

### III. Conversational Interface

| Technology                  | Purpose                                                                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Botpress**                | An open-source conversational AI platform used to power the in-app chatbot. It assists users with queries about Blockchain spaces, profile setup, and system usage. |
| **Knowledge Base**          | Continuously updated content store that feeds Botpress with answers, tips, and platform documentation.                                                              |
| **Live Widget Integration** | The chatbot is embedded directly within the Helixure interface and activates based on user interaction.                                                             |

### IV. Utilities & Developer Tools

| Technology                 | Purpose                                                             |
| -------------------------- | ------------------------------------------------------------------- |
| **clsx**                   | Utility for conditionally combining CSS class names.                |
| **html2canvas**            | Used for generating downloadable images (e.g., user ID cards).      |
| **ESLint + Prettier**      | Enforces code quality and formatting standards.                     |
| **TypeScript (selective)** | Adds type safety to complex modules in React and Blockchain layers. |
| **PostCSS + Autoprefixer** | Ensures cross-browser compatibility for CSS.                        |

| ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/5.png?updatedAt=1751134895234)  | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/13.png?updatedAt=1751134895234) | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/6.png?updatedAt=1751134895234)  | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/4.png?updatedAt=1751134895234) | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/10.png?updatedAt=1751134895234) | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/9.png?updatedAt=1751134895234) |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/12.png?updatedAt=1751134895234) | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/2.png?updatedAt=1751134895234)  | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/11.png?updatedAt=1751134895234) | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/1.png?updatedAt=1751134895234) | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/7.png?updatedAt=1751134895234)  | ![](https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Logo%20Stack/8.png?updatedAt=1751134895234) |

---

### File Structure Overview – Helixure v2.0

| Folder / File Name  | Description                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1) Docs/`          | Contains all project-related documentation such as reports, diagrams, and supporting material for reference or submission.                                                  |
| `blockchain-setup/` | Includes smart contracts, testnet configurations, and scripts necessary for initializing or deploying the blockchain components (e.g., using Sepolia Testnet and MetaMask). |
| `helixure_v2.0/`    | Main frontend and backend codebase for the Helixure v2.0 platform. This is where the application logic, components, state management, and UI reside.                        |
| `README.md`         | The project’s main README file. It provides an overview of the application, setup instructions, usage guidelines, feature highlights, and technical stack.                  |

---

## Clone and Setup Commands

### I. Clone the Repository

```bash
git clone https://github.com/KshitijSawant1/Team--Absolut-Logic---Helixure_v2.0.git
cd Team--Absolut-Logic---Helixure_v2.0
```

### II. Blockchain Setup

```bash
# Navigate to the blockchain setup folder
cd blockchain-setup

# Install required dependencies
npm install

# Compile smart contracts
npx hardhat compile

# Deploy to Sepolia Testnet (ensure proper configuration in hardhat.config.js and .env)
npx hardhat run scripts/deploy.js --network sepolia
```

### III. Helixure v2.0 Frontend (Whiteboard System)

```bash
# Go back to root and navigate to frontend
cd ../helixure_v2.0

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## **⭐ Support**

If you like this project, **give it a star** ⭐ on GitHub!

---
