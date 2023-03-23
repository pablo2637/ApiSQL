const queries = {
    getAllEntries: `SELECT e.title,
                            e.content,
                            e.date,
                            e.category,
                            a.name,
                            a.surname,
                            a.image
                        FROM entries AS e
                            INNER JOIN
                            authors AS a ON e.id_author = a.id_author
                    ORDER BY e.title;`,

    getEntriesByEmail: `SELECT e.title,
                                e.content,
                                e.date,
                                e.category,
                                a.name,
                                a.surname,
                                a.image
                            FROM entries AS e
                                INNER JOIN
                                authors AS a ON e.id_author = a.id_author
                        WHERE a.email = $1
                        ORDER BY e.title;`,

    createEntry: `INSERT INTO entries(
                                        title,
                                        content,
                                        id_author,
                                        category
                                    )
                                    VALUES (
                                        $1,
                                        $2,
                                        (
                                            SELECT id_author 
                                                FROM authors 
                                            WHERE email=$3
                                        ),
                                        $4
                                    );`,

    updateEntry: `UPDATE entries 
                    SET title=($1),
                        content=($2),
                        category=($3)
                WHERE id_entry=($4);`,
                
    deleteEntry: `DELETE FROM entries 
                WHERE id_entry=($1);`
}

module.exports = queries;