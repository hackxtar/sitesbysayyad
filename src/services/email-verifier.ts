
'use server';

// A list of common disposable email domains.
// In a real application, this would be a much more comprehensive and frequently updated list,
// potentially from a third-party API service.
const disposableDomains = new Set([
  '10minutemail.com',
  'temp-mail.org',
  'guerrillamail.com',
  'mailinator.com',
  'getnada.com',
  'throwawaymail.com',
]);

/**
 * Verifies an email address to check if it belongs to a known disposable email provider.
 * @param email The email address to verify.
 * @returns A promise that resolves to `false` if the email is from a disposable provider, `true` otherwise.
 */
export async function verifyEmail(email: string): Promise<boolean> {
  if (!email || !email.includes('@')) {
    return false;
  }
  const domain = email.split('@')[1];

  // Simulate a network delay for a more realistic API call
  await new Promise(resolve => setTimeout(resolve, 500));

  return !disposableDomains.has(domain.toLowerCase());
}
