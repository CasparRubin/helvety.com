import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Helvety",
  description: "Impressum for Helvety - Software and Apparel",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <article className="space-y-10">
          <header>
            <h1 className="text-3xl font-bold mb-2">Impressum</h1>
            <p className="text-muted-foreground text-sm">
              Impressum gemäss Art. 3 UWG / Legal Notice pursuant to Swiss
              Unfair Competition Act
            </p>
          </header>

          {/* Company Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <div className="p-6 border border-border bg-card space-y-4">
              <div>
                <p className="font-medium text-foreground">Helvety by Rubin</p>
                <p className="text-muted-foreground">
                  Einzelfirma (Sole Proprietorship)
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-1">Owner</p>
                <p className="text-muted-foreground">
                  <a
                    href="https://casparrubin.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    Caspar Camille Rubin
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-1">Address</p>
                <p className="text-muted-foreground">Holeestrasse 116</p>
                <p className="text-muted-foreground">4054 Basel</p>
                <p className="text-muted-foreground">Switzerland</p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-1">Contact</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a
                    href="mailto:contact@helvety.com"
                    className="hover:text-foreground transition-colors"
                  >
                    contact@helvety.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Phone:{" "}
                  <a
                    href="tel:+41798700208"
                    className="hover:text-foreground transition-colors"
                  >
                    +41 79 870 02 08
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Business Activity */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Business Activity</h2>
            <p className="text-sm text-muted-foreground">
              Helvety by Rubin develops and sells software, software-as-a-service
              (SaaS) subscriptions, and apparel. All products are designed and/or
              developed in Switzerland.
            </p>
          </section>

          {/* Trademark */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Trademark</h2>
            <p className="text-sm text-muted-foreground">
              The Helvety brand is a registered Swiss trademark. All rights
              reserved.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Liability for Content
                </h3>
                <p className="text-sm text-muted-foreground">
                  The content of this website has been created with the greatest
                  possible care. However, we cannot guarantee the accuracy,
                  completeness, or timeliness of the content. As a service
                  provider, we are responsible for our own content on these pages
                  in accordance with general laws. However, we are not obligated
                  to monitor transmitted or stored third-party information or to
                  investigate circumstances that indicate illegal activity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Liability for Links</h3>
                <p className="text-sm text-muted-foreground">
                  Our website may contain links to external third-party websites
                  over whose content we have no influence. Therefore, we cannot
                  accept any liability for this third-party content. The
                  respective provider or operator of the linked pages is always
                  responsible for the content of the linked pages. The linked
                  pages were checked for possible legal violations at the time of
                  linking. Illegal content was not recognizable at the time of
                  linking. Permanent monitoring of the content of the linked
                  pages is not reasonable without concrete evidence of a legal
                  violation. Upon notification of violations, we will remove such
                  links immediately.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Copyright</h3>
                <p className="text-sm text-muted-foreground">
                  The content and works created by the site operators on these
                  pages are subject to Swiss copyright law. Reproduction,
                  editing, distribution, and any kind of use outside the limits
                  of copyright law require the written consent of the respective
                  author or creator. Downloads and copies of this site are only
                  permitted for private, non-commercial use.
                </p>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Dispute Resolution</h2>
            <p className="text-sm text-muted-foreground mb-4">
              The European Commission provides a platform for online dispute
              resolution (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              We are not obligated and generally not willing to participate in
              dispute resolution proceedings before a consumer arbitration board.
            </p>
          </section>

          {/* Applicable Law */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Applicable Law and Jurisdiction
            </h2>
            <p className="text-sm text-muted-foreground">
              This Impressum and any disputes arising from or in connection
              with this website are governed by Swiss law. The exclusive place of
              jurisdiction is Basel-Stadt, Switzerland.
            </p>
          </section>

          {/* Related Documents */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Related Documents</h2>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="underline hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
                {" — "}Usage terms, disclaimers, and limitations
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="underline hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                {" — "}How your data is handled and protected
              </li>
            </ul>
          </section>

          {/* Last Updated */}
          <footer className="pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Last updated: January 30, 2026
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
