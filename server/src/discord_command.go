package main

import (
	"context"

	"github.com/bwmarrin/discordgo"
)

var (
	// Used to store all of the functions that handle each command
	discordCommandMap = make(map[string]func(context.Context, *discordgo.MessageCreate, []string))
)

// Note that Discord commands only work in channels outside of the lobby-replication channel
func discordCommandInit() {
	// Duplicated commands (e.g. commands that also work in the lobby)
	discordCommandMap["replay"] = discordCommandReplay
	discordCommandMap["link"] = discordCommandReplay
	discordCommandMap["game"] = discordCommandReplay
	discordCommandMap["uptime"] = discordUptime

	discordCommandMap["ping"] = discordPing
	discordCommandMap["here"] = discordPing
	discordCommandMap["teachme"] = discordTeachMe
	discordCommandMap["subscribe"] = discordSubscribe
	discordCommandMap["unsubscribe"] = discordUnsubscribe
}

func discordCommand(ctx context.Context, m *discordgo.MessageCreate, command string, args []string) {
	// Check to see if there is a command handler for this command
	if discordCommandFunction, ok := discordCommandMap[command]; ok {
		discordCommandFunction(ctx, m, args)
	}
	// (do nothing if they sent an invalid command)
}
