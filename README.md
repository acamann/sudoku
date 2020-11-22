# Sudoku App

This is a personal project to become more comfortable with React/Redux using TypeScript by building a Sudoku Generator & Solver.

## Goals:
 - establish scalable folder structure
 - establish scalable frontend standards & rationale
 - understand the benefits and limits of scss over traditional css, establish stying standards (within component vs separate file, etc)
 - practice writing React component tests
 - make a cool mobile-first sudoku app that displays a popover menu on cell click to do pencil marks

## Roadmap

V1 mvp
 - Load sudoku from 3rd party api
 - Only edit initially empty cells
 - Click cell, enter number
 - Check solution

V2 enhanced solve
 - Click cell, popover menu
 - Pencil marks
 - Check cell
 - Undo/redo

V3 - persist stats backend & auth
 - Account login
 - Store analytics
 - User view puzzle stats

V4 - puzzle repo backend
 - Generate own repo of sudoku puzzles
 - Difficulty score calculation for puzzle repo (human solver algorithms)
 - Load puzzles from own puzzle repo

V5 - true pencil mark
 - Click cell, zoom box, draw and write

V6 - enhanced stats
 - Leaderboards per difficulty range
 - User improvement visualization
 - Analyze common strategies
