---
title: alias
---

{% highlight bash %}

alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
alias ......='cd ../../../../..'
alias c='echo -ne "\033c"'
alias dir='dir --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias g='git'
alias ga='git add .'
alias gc='git commit -m "$(curl -s http://whatthecommit.com/index.txt)";'
alias gpo='git push origin'
alias grep='grep --colour=auto'
alias i3lock='i3lock_blur'
alias logout='pkill -KILL -u $USER'
alias logoff='logout'
alias ls='ls -lA --color=auto -xA --group-directories-first'
alias mkdir='mkdir -p'
alias path='echo -e ${PATH//:/\\n}'
alias q='exit'
alias sudo='sudo '
alias top='htop'
alias tree='tree -a'
alias vdir='vdir --color=auto'
alias vi='vim'
alias x='exit'
alias dot='git clone https://github.com/simpyll/dotfiles.git'
alias ccat='highlight -O ansi'
Contact GitHub API Training Shop Blog About
{% endhighlight %}
