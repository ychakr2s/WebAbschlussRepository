package com.YassineGroup.service.Heuristic_Algorithms;


import com.YassineGroup.service.AbstractGraphColoring.Algorithm;
import com.YassineGroup.service.AbstractGraphColoring.GraphColoring;
import com.YassineGroup.service.Graph.Graph;

import java.util.Arrays;

public class Largest_First_Algorithm extends GraphColoring {
    /*
     * Attributes
     */
    private int[] resultColors;
    // This variable represent whether a color available for this Vertex or not
    private boolean[] available;

    /*
     * Constructor
     */
    public Largest_First_Algorithm(Graph g) {
        super(g);

        this.resultColors = new int[V];
        Arrays.fill(resultColors, -1);

        this.available = new boolean[g.getNumVertices()];
        Arrays.fill(available, true);
    }

    @Override
    public Algorithm executeGraphAlgorithm() {
        double start = System.currentTimeMillis();
        int count = 1;
        /*
         * Assign the first color to first vertex with highest degree
         */
        int vertex0 = vertexHighstAdjDegree(graph.getNodes());
        setColor(vertex0, 0, resultColors);
        // remove the colored Vertex from the Vertices Array
        int[] remainingVertices = remove(graph.getNodes(), vertex0);

        while (count < V) {
            int vertex = vertexHighstAdjDegree(remainingVertices);
            /*
             * find the suitable color for this vertex
             */
            int cr = findRightColor(graph, vertex, resultColors, available);
            // Assign the found color to the Vertex
            setColor(vertex, cr, resultColors);
            // Reset the values back to true for the next iteration
            Arrays.fill(available, true);
            count++;
            remainingVertices = remove(remainingVertices, vertex);
        }

        double end = (System.currentTimeMillis() - start) / 1000;
        return new Algorithm("Largest First Algorithm", computeResultsColors(resultColors), usedColor(resultColors), resultColors, end);
    }

    @Override
    public void description() {
        System.out.println("this is the implementation of the Largest First Algorithm ");
    }

    @Override
    public void printSolution() {
        description();
        printTest(resultColors, graph);
    }
}
