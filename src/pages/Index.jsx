import { Box, Heading, VStack, Input, Button, Textarea, Select, FormControl, FormLabel, Image } from "@chakra-ui/react";
import { FaSave, FaUserCog } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Configuration Settings <FaUserCog />
        </Heading>

        {/* User Information Section */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            User Information
          </Heading>
          <FormControl id="username" isRequired mt={4}>
            <FormLabel>Username</FormLabel>
            <Input placeholder="Enter your username" />
          </FormControl>
          <FormControl id="email" isRequired mt={4}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
        </Box>

        {/* Preferences Section */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Preferences
          </Heading>
          <FormControl id="language" mt={4}>
            <FormLabel>Language</FormLabel>
            <Select placeholder="Select language">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </Select>
          </FormControl>
          <FormControl id="theme" mt={4}>
            <FormLabel>Theme</FormLabel>
            <Select placeholder="Select theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Select>
          </FormControl>
        </Box>

        {/* Notifications Section */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Notifications
          </Heading>
          <FormControl id="email-notifications" mt={4}>
            <FormLabel>Email Notifications</FormLabel>
            <Select placeholder="Email notification settings">
              <option value="all">All</option>
              <option value="only-important">Only Important</option>
              <option value="none">None</option>
            </Select>
          </FormControl>
          <FormControl id="desktop-notifications" mt={4}>
            <FormLabel>Desktop Notifications</FormLabel>
            <Select placeholder="Desktop notification settings">
              <option value="all">All</option>
              <option value="only-important">Only Important</option>
              <option value="none">None</option>
            </Select>
          </FormControl>
        </Box>

        {/* Save Button */}
        <Button leftIcon={<FaSave />} colorScheme="blue" size="lg">
          Save Changes
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
