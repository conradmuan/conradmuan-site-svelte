-- CreateTable
CREATE TABLE "Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" DATETIME NOT NULL,
    "dateUpdated" DATETIME
);

-- CreateTable
CREATE TABLE "CustomFields" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" TEXT,
    "dateCreated" DATETIME NOT NULL,
    "dateUpdated" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomFields_name_key" ON "CustomFields"("name");
