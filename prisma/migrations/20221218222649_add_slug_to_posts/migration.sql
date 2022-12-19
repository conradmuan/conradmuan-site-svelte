/*
  Warnings:

  - Added the required column `slug` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT,
    "titleRendered" TEXT NOT NULL,
    "contentRendered" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" DATETIME NOT NULL,
    "dateUpdated" DATETIME
);
INSERT INTO "new_Posts" ("content", "contentRendered", "dateCreated", "dateUpdated", "id", "published", "title", "titleRendered", "slug") SELECT "content", "contentRendered", "dateCreated", "dateUpdated", "id", "published", "title", "titleRendered", "title" || rowid FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
CREATE UNIQUE INDEX "Posts_slug_key" ON "Posts"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
