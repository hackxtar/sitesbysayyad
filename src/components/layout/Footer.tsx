
export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base text-muted-foreground">
          &copy; {new Date().getFullYear()} SitesBySayyad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
