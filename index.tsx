/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

interface StreamPreviewProps {
    currentUserId: string;
    participantOnScreen?: {
        stream?: { ownerId: string; };
    };
}

export default definePlugin({
    name: "HideOwnStreamPreview",
    description: "Hides the floating preview of your own screen share while keeping your broadcast running.",
    authors: [],
    tags: ["Media", "Appearance"],
    enabledByDefault: true,
    patches: [
        {
            find: "cannot stop stream for non streamer",
            replacement: {
                match: /render\(\)\{(?=let\{channel:\i,streamId:\i,participantOnScreen:)/,
                replace: "$&if($self.shouldHide(this.props))return null;"
            }
        }
    ],

    shouldHide({ currentUserId, participantOnScreen }: StreamPreviewProps) {
        return typeof currentUserId === "string"
            && participantOnScreen?.stream?.ownerId === currentUserId;
    }
});

