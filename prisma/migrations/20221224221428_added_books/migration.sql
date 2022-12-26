-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT,
    "thumbnail" TEXT,
    "publishedDate" DATETIME,
    "dateCreated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Authors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dateCreated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AuthorsOnBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bookId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "AuthorsOnBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AuthorsOnBook_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Authors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BookCategories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "dateCreated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BookCategoriesOnBooks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bookId" INTEGER NOT NULL,
    "bookCategoryId" INTEGER NOT NULL,
    CONSTRAINT "BookCategoriesOnBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BookCategoriesOnBooks_bookCategoryId_fkey" FOREIGN KEY ("bookCategoryId") REFERENCES "BookCategories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Authors_name_key" ON "Authors"("name");

-- CreateIndex
CREATE INDEX "AuthorsOnBook_bookId_authorId_idx" ON "AuthorsOnBook"("bookId", "authorId");

-- CreateIndex
CREATE UNIQUE INDEX "BookCategories_category_key" ON "BookCategories"("category");

-- CreateIndex
CREATE INDEX "BookCategoriesOnBooks_bookId_bookCategoryId_idx" ON "BookCategoriesOnBooks"("bookId", "bookCategoryId");
