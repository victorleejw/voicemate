
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function VoiceMateLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 p-6">
      <header className="max-w-5xl mx-auto text-center py-10">
        <img
          src="/voicemate-logo.png"
          alt="VoiceMate Logo"
          className="mx-auto w-24 mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">VoiceMate</h1>
        <p className="text-lg text-gray-600">
          Your AI-powered assistant that answers calls, transcribes, and summarizes.
        </p>
        <div className="mt-6">
          <Button className="text-lg px-6 py-3">Join the Waitlist</Button>
        </div>
      </header>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <CheckCircle className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">24/7 AI Call Handling</h3>
            <p>Never miss an important call. VoiceMate answers, greets, and records it all.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <CheckCircle className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Smart Summarization</h3>
            <p>Get concise summaries with caller name, purpose, and audio playback.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <CheckCircle className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Telegram, Slack, WhatsApp Alerts</h3>
            <p>Receive summaries wherever you work — no extra app needed.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <CheckCircle className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Built with Twilio, Whisper & GPT-4o</h3>
            <p>Enterprise-grade voice tech combined with the smartest AI models.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-16">
        &copy; {new Date().getFullYear()} VoiceMate. All rights reserved.
      </footer>
    </div>
  );
}
