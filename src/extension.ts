import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("Bentley CFG Language Extension is now active!");

  // Register any additional providers or commands here
  // For example, you could add completion providers, hover providers, etc.

  // Example: Register a completion provider
  const provider = vscode.languages.registerCompletionItemProvider(
    { scheme: "file", language: "bentley-cfg" },
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        // Provide basic completions for common functions
        const completions = [
          new vscode.CompletionItem("if", vscode.CompletionItemKind.Keyword),
          new vscode.CompletionItem("ifdef", vscode.CompletionItemKind.Keyword),
          new vscode.CompletionItem(
            "ifndef",
            vscode.CompletionItemKind.Keyword
          ),
          new vscode.CompletionItem("else", vscode.CompletionItemKind.Keyword),
          new vscode.CompletionItem("elif", vscode.CompletionItemKind.Keyword),
          new vscode.CompletionItem("endif", vscode.CompletionItemKind.Keyword),
          new vscode.CompletionItem(
            "%include",
            vscode.CompletionItemKind.Function
          ),
          new vscode.CompletionItem(
            "%error",
            vscode.CompletionItemKind.Function
          ),
          new vscode.CompletionItem("$(", vscode.CompletionItemKind.Snippet),
          new vscode.CompletionItem("${", vscode.CompletionItemKind.Snippet),
          new vscode.CompletionItem(
            "defined",
            vscode.CompletionItemKind.Function
          ),
          new vscode.CompletionItem(
            "!defined",
            vscode.CompletionItemKind.Function
          ),
          new vscode.CompletionItem(
            "exists",
            vscode.CompletionItemKind.Function
          ),
          new vscode.CompletionItem("true", vscode.CompletionItemKind.Value),
          new vscode.CompletionItem("false", vscode.CompletionItemKind.Value),
        ];

        return completions;
      },
    }
  );

  context.subscriptions.push(provider);
}

export function deactivate() {
  // Clean up resources when extension is deactivated
}
