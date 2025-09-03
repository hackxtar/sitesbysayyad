
export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sitefolio. All rights reserved. Built by Sayyad.
        </p>
      </div>
    </footer>
  );
}
