import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Mail, Calendar, Settings, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading, isAdmin } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
    }
  }, [isAuthenticated, isLoading, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const initials = user?.firstName && user?.lastName
    ? `${user.firstName[0]}${user.lastName[0]}`
    : user?.email?.[0]?.toUpperCase() || "U";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-dashboard-title">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Manage your account and projects.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={user?.profileImageUrl || undefined} alt={user?.firstName || "User"} />
                    <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">
                    {user?.firstName} {user?.lastName}
                  </h3>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                  <Badge variant={isAdmin ? "default" : "secondary"} className="mt-2">
                    {isAdmin ? "Admin" : "User"}
                  </Badge>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{user?.email || "No email"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Recently"}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                      <a href="/#contact">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            <span className="font-medium">Start a Project</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Get in touch with our team</span>
                        </div>
                      </a>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                      <a href="/#portfolio">
                        <div className="flex flex-col items-start gap-1">
                          <div className="flex items-center gap-2">
                            <ExternalLink className="h-5 w-5 text-primary" />
                            <span className="font-medium">View Portfolio</span>
                          </div>
                          <span className="text-xs text-muted-foreground">See our recent work</span>
                        </div>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Projects</CardTitle>
                  <CardDescription>Projects associated with your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No active projects yet.</p>
                    <p className="text-sm mt-1">Contact us to start your first project!</p>
                    <Button className="mt-4" asChild>
                      <a href="/#contact">Get Started</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {isAdmin && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge>Admin</Badge>
                      Admin Access
                    </CardTitle>
                    <CardDescription>You have administrative privileges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild>
                      <Link href="/admin">Go to Admin Panel</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
