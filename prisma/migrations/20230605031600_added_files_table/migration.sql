-- CreateTable
CREATE TABLE "Files" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "addedByUserId" INTEGER NOT NULL,
    "dateCreated" DATETIME NOT NULL,
    "dateUpdated" DATETIME,
    CONSTRAINT "Files_addedByUserId_fkey" FOREIGN KEY ("addedByUserId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Files_path_key" ON "Files"("path");

-- CreateIndex
CREATE UNIQUE INDEX "Files_uri_key" ON "Files"("uri");
