/*
  Warnings:

  - You are about to drop the `Actor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovieActor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `actors` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Actor";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MovieActor";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL,
    "genres" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "runtime" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "actors" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("country", "director", "genres", "id", "language", "plot", "poster", "rating", "release_date", "runtime", "title") SELECT "country", "director", "genres", "id", "language", "plot", "poster", "rating", "release_date", "runtime", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
