import { useState } from "react";
import { Box, Button, Text } from "@canva/app-ui-kit";
import SpeakerNotesTab from "../components/speakernotes_tab";
import VisualPromptTab from "../components/visualprompt_tab";

export const AgentToolsPage = () => {
  const [activeTab, setActiveTab] = useState<"notes" | "visual">("notes");

  return (
    <Box padding="1u" display="flex" flexDirection="column" gap="2.5u">
      <Box
        background="neutralLow"
        padding="1u"
        borderRadius="large"
        border="standard"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text variant="bold" size="large">
          🤖 AI-Powered Tools
        </Text>
      </Box>

      {/* Tab Navigation */}
      <Box display="flex" flexDirection="column" gap="1u" width="100%">
        <Button
          variant={activeTab === "notes" ? "primary" : "tertiary"}
          onClick={() => setActiveTab("notes")}
          fullWidth
        >
          🎙 Generate Speaker Notes
        </Button>
        <Button
          variant={activeTab === "visual" ? "primary" : "tertiary"}
          onClick={() => setActiveTab("visual")}
          fullWidth
        >
          🎨 Visual Prompt Suggestion
        </Button>
      </Box>

      {/* Tab Content */}
      <Box paddingTop="2u">
        {activeTab === "notes" && <SpeakerNotesTab />}
        {activeTab === "visual" && <VisualPromptTab />}
      </Box>
    </Box>
  );
};

export default AgentToolsPage;