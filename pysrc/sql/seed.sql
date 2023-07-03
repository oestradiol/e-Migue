INSERT INTO Departamentos(nome) 
VALUES 
    ('CIC'),
    ('MAT'),
    ('EST');


INSERT INTO Professores (nome, departamento_id)
VALUES
    ('João Gomes', (SELECT id FROM Departamentos WHERE nome='CIC')),
    ('Luan Lemos', (SELECT id FROM Departamentos WHERE nome='CIC')),
    ('Rodrigo José', (SELECT id FROM Departamentos WHERE nome='CIC'));

INSERT INTO Disciplinas (nome, departamento_id)
VALUES
    ('Programação Competitiva', (SELECT id FROM Departamentos WHERE nome='CIC')),
    ('Linguagens de Programação', (SELECT id FROM Departamentos WHERE nome='CIC')),
    ('Organização e Arquitetura de Computadores', (SELECT id FROM Departamentos WHERE nome='CIC'));

INSERT INTO Turmas(numero, professor_id, disciplina_id)
VALUES
    ('01', (SELECT id FROM Professores WHERE nome='João Gomes'), (SELECT id FROM Disciplinas WHERE nome='Programação Competitiva')),
    ('02', (SELECT id FROM Professores WHERE nome='João Gomes'), (SELECT id FROM Disciplinas WHERE nome='Linguagens de Programação')),
    ('03', (SELECT id FROM Professores WHERE nome='João Gomes'), (SELECT id FROM Disciplinas WHERE nome='Organização e Arquitetura de Computadores'));

INSERT INTO Users(email, nome, matricula, curso, senha, is_admin)
VALUES
    ('admin@email.com', 'Admin Admin', '000000000', 'CIC', 'admin', true),
    ('ruan@email.com', 'Ruan Petrus',  '211010459', 'CIC', '123', false),
    ('brines@email.com', 'Paulo Brines', '211010459', 'CIC', '123', false);

INSERT INTO Avaliacoes(pontuacao, comentario, user_id, turma_id)
VALUES
    (1, 'Texto do comentario 1', (SELECT id FROM Users WHERE nome='Ruan Petrus'), 1),
    (2, 'Texto do comentario 2', (SELECT id FROM Users WHERE nome='Ruan Petrus'), 1),
    (3, 'Texto do comentario 3', (SELECT id FROM Users WHERE nome='Ruan Petrus'), 1);

INSERT INTO Denuncias(user_id, avaliacao_id)
VALUES
    ((SELECT id FROM Users WHERE nome='Ruan Petrus'), (SELECT id FROM Avaliacoes WHERE comentario='Texto do comentario 1')),
    ((SELECT id FROM Users WHERE nome='Ruan Petrus'), (SELECT id FROM Avaliacoes WHERE comentario='Texto do comentario 1')),
    ((SELECT id FROM Users WHERE nome='Ruan Petrus'), (SELECT id FROM Avaliacoes WHERE comentario='Texto do comentario 1'));
    
