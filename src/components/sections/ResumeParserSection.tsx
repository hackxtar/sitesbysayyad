
'use client';

import { useState, useRef, useTransition } from 'react';
import { handleResumeUpload } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, UploadCloud } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ResumeParserSection() {
  const [parsedResume, setParsedResume] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setError(null);
      setParsedResume(null);

      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        if (!text) {
          setError('File is empty or could not be read.');
          return;
        }
        startTransition(async () => {
          const result = await handleResumeUpload(text);
          if (result.success) {
            setParsedResume(result.data);
          } else {
            setError(result.error);
          }
        });
      };
      reader.onerror = () => {
        setError('Failed to read file.');
      };
      reader.readAsText(file);
    }
  };
  
  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">AI-Powered Resume Analysis</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Upload your resume to see it dynamically parsed and formatted by GenAI.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload Your Resume</CardTitle>
            <CardDescription>Only .txt files are supported for this demonstration.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid w-full items-center gap-1.5">
              <div className="flex items-center space-x-2">
                <Input id="resume-file" type="file" ref={fileInputRef} onChange={handleFileChange} accept=".txt" className="hidden" />
                <Button variant="outline" onClick={() => fileInputRef.current?.click()} disabled={isPending}>
                  <UploadCloud className="mr-2 h-4 w-4" />
                  Choose File
                </Button>
                {fileName && <span className="text-sm text-muted-foreground">{fileName}</span>}
              </div>
            </div>

            {isPending && (
              <div className="flex items-center justify-center p-8 rounded-md bg-secondary">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-4 text-muted-foreground">Parsing your resume...</p>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {parsedResume && !isPending && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Parsed Resume</h3>
                <Card className="bg-secondary">
                  <CardContent className="p-6">
                    <pre className="whitespace-pre-wrap font-body text-sm text-foreground">
                      {parsedResume}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
