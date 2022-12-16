/*
  Warnings:

  - Added the required column `titleRendered` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomFields" ADD COLUMN "valueRendered" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "titleRendered" TEXT NOT NULL,
    "contentRendered" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" DATETIME NOT NULL,
    "dateUpdated" DATETIME
);
INSERT INTO "new_Posts" ("content", "dateCreated", "dateUpdated", "id", "published", "title") SELECT "content", "dateCreated", "dateUpdated", "id", "published", "title" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
