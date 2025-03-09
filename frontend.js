import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function StudeeChat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [userId, setUserId] = useState("test_user"); // Replace with actual user authentication

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    const res = await fetch("https://your-backend-url/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, user_id: userId }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <motion.h1 className="text-xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Studee AI - Algebra 1 Tutor</motion.h1>
      <Card className="w-full max-w-lg p-4">
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Input
              placeholder="Ask a question about Algebra 1..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
          {response && (
            <motion.p className="mt-4 p-2 bg-gray-100 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {response}
            </motion.p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
