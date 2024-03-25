/*
  Warnings:

  - You are about to drop the column `genre` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `genresss` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL,
    "genresss" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "runtime" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "language" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("country", "director", "id", "language", "plot", "poster", "rating", "release_date", "runtime", "title") SELECT "country", "director", "id", "language", "plot", "poster", "rating", "release_date", "runtime", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
